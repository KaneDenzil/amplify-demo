/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import ViewA from "./ViewA";
export default function Header(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      height="858px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="1440px"
        height="858px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <ViewA
        height="858px"
        position="absolute"
        backgroundColor="rgba(0,0,0,0.5)"
        display="flex"
        left="0px"
        top="0px"
        {...getOverrideProps(overrides, "View.ViewA[0]")}
      ></ViewA>
    </View>
  );
}
