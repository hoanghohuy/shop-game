import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

export default function HelperText({ text }: { text: string }) {
  return (
    <Text className="mt-2" type="danger">
      {text}
    </Text>
  );
}
