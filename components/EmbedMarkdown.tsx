import * as React from "react";
import axios from "axios";
//import fs from "fs-extra";
import {
  Typography,
  H1,
  usePageData,
  Markdown,
  Alert,
  Link,
  H3,
} from "@redocly/developer-portal/ui";

export const FetchDataFromURL = (props) => {
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const url = props.externalUrl;

    const fetchData = async () => {
      try {
        setLoading(true);
        //const response = await axios.get(props.externalUrl);
        let response = await fetch(url);
        let text = await response.text();
        setData(text);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [props.externalUrl]);

  return { data, error, loading };
};

export function EmbedMarkdown(props) {
  const { data, loading, error } = FetchDataFromURL(props);
  const urlToShare = props.prettyUrl ? props.prettyUrl : props.externalUrl;
  const loadingFrom = props.loadingFrom
    ? "View external source (" + props.loadingFrom + ")."
    : "";

  if (error) {
    console.log(error);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <Alert
            variant="attention"
            header="Content for this page loaded from external source"
          >
            <Link to={urlToShare} external>
              {loadingFrom}
            </Link>
          </Alert>
          <Markdown source={data} />
        </div>
      )}
    </>
  );
}

/**
  async function main(props) {
  const file = await unified().use(marked).process(props.externalUrl);

  const fileAlt = await unified().use(marked).process(props.externalUrl);

  console.log(String(file));
  console.log(file.toString);

  console.log(String(fileAlt));
  console.log(fileAlt.toString);
}

**/

/**

export const NewUseFetchTest = (url) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.ok) return response.text();
        else
          return Promise.reject(
            "Unable to properly fetch remote Markdown text."
          );
      })
      .then((text) => {
        setData(text);
      })
      .catch((error) => {
        setError(error);
        return Promise.reject("Unable to properly fetch remote Markdown text.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error }
};

 **/
