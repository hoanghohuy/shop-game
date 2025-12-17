import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

export default function HelperText({ text }: { text?: string }) {
  return (
    <Text className="block w-full text-sm! min-h-4 pb-1" type="danger">
      {text}
    </Text>
  );
}
