export const getFailureToastOptions = ({
  text,
  error,
}: {
  text: string;
  error: string;
}) => ({
  title: text,
  description: error,
  position: "top",
  status: "error",
  duration: 5000,
  isClosable: true,
});
