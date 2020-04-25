---
title: Data Export Quickstart
---

# Data Export Quickstart

Learn how to setup basic transaction data exports.

---

Reconciling transactions is a common business process, and is easy to do with Rebilly, requiring only
these three steps to export source data:

1. Request a [Data Export](/developer-portal/quickstart#step-1-request-a-data-export).
2. Get the [`download` link of the Data Export](/developer-portal/quickstart#step-2-get-the-completed-data-exports-download-link).
3. [Retrieve the file](/developer-portal/quickstart#step-3-download-the-file).

<div class="warning">Coming soon: If you create a data export request schedule, then you may only need to do step 1 once.</div>

<div class="warning">Coming soon: Specify which fields to include in the export. This will allow you to minimize file size while getting every field that is valuable for your use-case.</div>

---

## Step 1: Request a Data Export

Data exports are objects representing a set of data to be exported to some desired format.
The data can be restricted by date range.  The data can be filtered.

The example here shows transaction data restricted by date range to `yesterday` and
filtered by only those with `approved` results.

You may need to adjust the filters or date ranges based on your own use-case.

```
curl -XPOST 'https://api-sandbox.rebilly.com/experimental/exports/transactions' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'REB-APIKEY: your-private-key' \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
-H 'User-Agent: your-console-library' \
--data-binary '{"arguments":{"criteria":{"op":"and","conditions":[{"op":"in","path":"/result","values":["approved"]}]}},"name":"test-export-2018-01-12","format":"csv","resource":"transactions","dateRange":{"start":"yesterday", "end":"today"}}' --compressed
```

This will return a response (you can see the full response in our API Reference for Data Exports).  Here are key excerpts from the response:

<div class="warning">This is an asynchronous process, and typically completes within 10 seconds to 2 minutes depending on the size of the dataset.</div>

* `"fileId": null`: this means there is no file generated yet. It will update when the status is `completed`.
* `"status": "pending"`: this means that the request was received but hasn't started processing yet.  It will go to `queued`, then `processing` and then `completed`.
* `"id": "1c7c3497-7ef0-4e44-a522-5df223ac5708"`: this is used to identify the data export, used in step 2.

Read the [API Reference Docs for creating a data export](/rebilly-api-swagger#tag/Data-Exports/paths/~1experimental~1data-exports/post).

---

## Step 2: Get the completed Data Export's download link

You should wait 1 or 2 minutes to allow for the data export to complete before querying the status of the data export.
For extremely large files (tens of millions of records), you may need to wait up to 5 or 10 minutes.

We recommend avoiding extremely large files if at all possible.

```
curl 'https://api-sandbox.rebilly.com/experimental/exports/transactions/1c7c3497-7ef0-4e44-a522-5df223ac5708' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'REB-APIKEY: your-private-key' \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
-H 'User-Agent: your-console-library'
```

What we're doing here is retrieving the data export request, to check if the status has updated to `completed` yet.

Has it updated to `completed` yet?  If so, you will grab the download link to use in the next step. The download
link will only appear in the API response once the export is `completed` though.

Read the [API Reference Docs for retrieving a data export by id](/rebilly-api-swagger#tag/Data-Exports/paths/~1experimental~1data-exports~1{id}/get).

---

## Step 3: Download the file

```
curl 'https://api-sandbox.rebilly.com/v2.1/files/11111111-2222-3333-4444-555555555555/download/' \
-H 'Accept-Encoding: gzip, deflate, br' \
-H 'REB-APIKEY: your-private-key' \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Accept: application/json, text/plain, */*' \
-H 'User-Agent: your-console-library'
```

This should download the file.

Read the [API Reference Docs for downloading a file](/rebilly-api-swagger#tag/Files/paths/~1v2.1~1files~1{id}~1download/get).

---

## Next steps

Congrats!  You've exported your first file using Rebilly's API.

You may want to learn about creating data exports in more details.

* [Using `arguments` to filter data exports](/developer-portal/arguments)
* [Using `dateRange` to filter by relative date for data exports](/developer-portal/date-range)
