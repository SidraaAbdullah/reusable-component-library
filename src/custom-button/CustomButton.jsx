import React from "react";
import Spinner from "components/spinner";
import * as Styles from "./CustomButton.styles";

const CustomButton = (props) => {
  const {
    leftIcon,
    isIcon,
    pointerEvents,
    title,
    buttonStyles,
    isLoading,
    disabled,
    heightStyling,
    ...remaining
  } = props;

  return (
    <Styles.Button
      pointerEvents={pointerEvents}
      loading={isLoading}
      style={{ height: heightStyling }}
    >
      <button
        disabled={disabled}
        type="button"
        {...remaining}
        style={{ ...buttonStyles, position: "relative" }}
      >
        {leftIcon && leftIcon}
        {title}
        {isLoading && (
          <Styles.SpinnerContainer>
            <Spinner color="white" />
          </Styles.SpinnerContainer>
        )}
        {isIcon && isIcon}
      </button>
    </Styles.Button>
  );
};

export default CustomButton;
