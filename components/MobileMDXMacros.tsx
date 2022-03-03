import * as React from "react";
import {
  H1,
  H2,
  H3,
  Typography,
  Link,
  Alert,
  CodeSampleWrap,
} from "@redocly/developer-portal/ui";

export const MobileIntroAndPrereqs = (props) => {
  const simplifiedSdkImg = require("./images/fast-sdk-simplified-diagram.png");

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <H1>Introduction/Overview</H1>

      <Typography>
        {" "}
        Fast powers instant, 1-click checkout with fraud protection on the web
        by leveraging authentication, shipping, and payment data for Shoppers
        across our network of merchants.
      </Typography>

      <Typography>
        {" "}
        The <strong>{props.sdkFullName}</strong> brings Fast Checkout to your{" "}
        <strong>{props.shortOS}</strong> app.
      </Typography>

      <Typography>
        The SDK serves as a bridge between your app and Fast's backend service.
        The checkout flow for web is described in detail here:{" "}
        <Link to="/developer-portal/for-sellers/quickstart/resources/faqs-to-share-with-customers/">
          Fast Checkout - How it Works
        </Link>
        .
      </Typography>

      <img src={simplifiedSdkImg} alt="Simplified Fast SDK diagram" />

      <H2>Requirements</H2>
      <ul>
        <li>
          The SDK module, <code>{props.sdkModuleName}</code>, is written in{" "}
          <strong>{props.sdkLanguage}</strong> and is fully compatible with{" "}
          <strong>{props.sdkCompatibleLanguage}</strong>, supporting{" "}
          <strong>{props.versionsSupportedOS}</strong>.
        </li>

        <li>
          The SDK supports <strong>{props.supportedDevices}</strong>.
        </li>

        <li>
          Prior to installing the SDK, ensure you've gone through our{" "}
          <Link to="https://www.fast.co/business-sign-up" external>
            merchant direct integration program
          </Link>
          .
        </li>
      </ul>
    </>
  );
};

export const MobileInvokeCheckout = (props) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Typography>
        In the {props.actionType} for the <code>{props.actionName}</code> tap
        action, invoke Fast Checkout and pass in relevant product information.
        When checkout is initiated, <code>{props.sdkModuleName}</code> will
        present a series of screens that complete the checkout process and
        communicate the result back to the host app.
      </Typography>
    </>
  );
};

export const MobileProductOptionsWarning = (props) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const myContent =
    "The " +
    props.sdkFullName +
    " requires a selection for all available product options, and will show an error screen if one or more product options is not selected.";

  return (
    <>
      <Alert variant="warning" content={myContent} />
    </>
  );
};

export const MobileSignout = (props) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const sdkFullName = props.sdkFullName;

  const myContent = `The ${sdkFullName} uses a token that allows 1-click checkout after authenticating once. This may need to be cleared if the host app wants to sign a user out, or otherwise reset the app.`;

  return (
    <>
      <Alert variant="attention" content={myContent} />

      <Typography>
        If your app supports user account creation, we recommend calling the{" "}
        <code>{props.signoutMethod}</code> method when a user signs out of their
        account in your app. This will clear the stored session so that a new
        user can sign in with that device. Fast won't use the previous session
        to trigger checkout.
      </Typography>
    </>
  );
};
