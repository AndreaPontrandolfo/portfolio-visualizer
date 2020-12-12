import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Icon, Box } from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";

export const Dropzone = ({ onChange }: any) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      return onChange(acceptedFiles);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  return (
    <Box {...getRootProps()} cursor="pointer" p="2%" outline="none">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>
          <Icon as={FiUpload} mr="3%" />
          Drop the file here ...
        </p>
      ) : (
        <p>
          <Icon as={FiUpload} mr="3%" />
          Import
        </p>
      )}
    </Box>
  );
};
