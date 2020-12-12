import xlsxParser from "xlsx-parse-json";
import { Container } from "@chakra-ui/react";
import { Dropzone } from "../components";

export const PortfolioForm = () => {
  const handleDropzone = async (files: any) => {
    const parsedFile = await xlsxParser.onFileSelection(files[0]);
    console.log(
      "🚀 ~ file: PortfolioForm.tsx ~ line 8 ~ handleDropzone ~ parsedFile",
      parsedFile
    );

    return parsedFile;
  };

  return (
    <Container>
      <Container borderWidth="1px" borderRadius="lg" m={2}>
        <Dropzone onChange={handleDropzone} />
      </Container>
    </Container>
  );
};
