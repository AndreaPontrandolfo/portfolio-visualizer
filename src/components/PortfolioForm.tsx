// @ts-nocheck

import { useState, useEffect, useCallback } from "react";
import { drop, map, omit } from "ramda";
import { hasData } from "ramda-addons";
import { renameKeys, trimCharsEnd } from "ramda-adjunct";
import xlsxParser from "xlsx-parse-json";
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useToast,
  Editable,
  EditablePreview,
  EditableInput,
  Select,
  HStack,
} from "@chakra-ui/react";
import { database } from "../services/database";
import { Dropzone, WarningSign } from "../components";
import { getSuccessToastOptions, getFailureToastOptions } from "../utils";

export const PortfolioForm = () => {
  const toast = useToast();
  const [currentPMC, setCurrentPMC] = useState(null);
  const [currentPortfolio, setCurrentPortfolio] = useState([]);
  const [touchedProductId, setTouchedProductId] = useState({});

  const fireCompletionCallback = ({ successMessage, failureMessage }) => {
    return (error) => {
      if (error) {
        toast(
          getFailureToastOptions({
            text: failureMessage,
            error,
          })
        );
      } else {
        toast(getSuccessToastOptions({ text: successMessage }));
      }
    };
  };

  const handleDropzone = async (files: any) => {
    const parsedFile = await xlsxParser.onFileSelection(files[0]);
    const reducedList = drop(2, parsedFile["Panoramica Portafoglio"]);
    const cleanProduct = (product) => {
      let cleanedProduct = product;
      cleanedProduct.Quantità = trimCharsEnd(".", cleanedProduct.Quantità);
      cleanedProduct = renameKeys(
        { "Ultimo ": "Quote", "Valore in EUR": "Position" },
        cleanedProduct
      );
      cleanedProduct = omit(["Valore"], cleanedProduct);
      return cleanedProduct;
    };
    const cleanedData = map(cleanProduct, reducedList);

    // firebase stuff. Move later.
    const productsRef = database.ref("users/utente1").child("products");
    // .push()
    productsRef.set(
      cleanedData,
      fireCompletionCallback({
        successMessage: "Data saved successfully.",
        failureMessage: "An error occurred. Data could not be saved.",
      })
    );
  };

  const handleChangePMC = (newPMC) => {
    if (isFinite(newPMC) && currentPMC !== newPMC) {
      const productsRef = database
        .ref("users/utente1/products")
        .child(touchedProductId);

      productsRef.update(
        { PMC: newPMC },
        fireCompletionCallback({
          successMessage: "PMC updated successfully.",
          failureMessage: "An error occurred. PMC could not be updated.",
        })
      );
    }
  };

  const fetchPortfolio = useCallback(() => {
    const ref = database.ref("users/utente1/products");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setCurrentPortfolio(data);
    });
  }, []);

  const handleEditableOnChange = (productIndex, product) => {
    setCurrentPMC(product.PMC);
    setTouchedProductId(productIndex);
  };

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  return (
    <Container maxW="80%">
      <Container borderWidth="1px" borderRadius="lg" m="2% auto">
        <Dropzone onChange={handleDropzone} />
      </Container>
      {hasData(currentPortfolio) ? (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>ISIN</Th>
              <Th>Quantity</Th>
              <Th>Position (€)</Th>
              <Th>Quote (€/$)</Th>
              <Th>PMC</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentPortfolio?.map((product, index) => {
              const {
                Prodotto,
                Codice,
                Quantità,
                Position,
                Quote,
                PMC,
                type,
              } = product;

              return (
                <Tr key={`prodotto-${index}`}>
                  <Td>{Prodotto}</Td>
                  <Td>{Codice}</Td>
                  <Td>{Quantità}</Td>
                  <Td>{Position}</Td>
                  <Td>{Quote}</Td>
                  <Td w="88px">
                    <HStack>
                      <Editable
                        selectAllOnFocus={false}
                        onSubmit={handleChangePMC}
                        onEdit={() => handleEditableOnChange(index, product)}
                        defaultValue={PMC ? PMC : "N/D"}
                        border="1px #E2E8F0 solid"
                        borderRadius="0.5rem;"
                        w="88px"
                      >
                        <EditablePreview
                          w="100%"
                          fontSize="18px"
                          p="8px 10px"
                        />
                        <EditableInput w="100%" fontSize="18px" p="8px 10px" />
                      </Editable>
                      <WarningSign requirement={PMC} />
                    </HStack>
                  </Td>
                  <Td>
                    <HStack>
                      <Select placeholder={type ? type : "Select type"}>
                        <option value="stock">Stock</option>
                        <option value="ETF">ETF</option>
                      </Select>
                      <WarningSign requirement={type} />
                    </HStack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <div>
          <p>No data.</p>
          <p>Start by importing a degiro Excel file.</p>
        </div>
      )}
    </Container>
  );
};
