import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { throttle } from "lodash";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import pdfFile from "./resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState(pdfFile);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState();
  const pdfWrapper = useRef(null);

  useEffect(() => {
    setWrapperWidth();
    window.addEventListener("resize", throttle(setWrapperWidth, 500));
    return () =>
      window.removeEventListener("resize", throttle(setWrapperWidth, 500));
  }, []);

  const setWrapperWidth = () => {
    const wrapperWidth = pdfWrapper.current.getBoundingClientRect().width;
    setWidth(wrapperWidth);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(numPages);
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  // https://github.com/wojtekmaj/react-pdf/issues/129

  return (
    <div className="pdfWrapper" id="pdfWrapper" ref={pdfWrapper} tabIndex="0">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={width} />
      </Document>
      <p>
        Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
      </p>
      <nav>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Resume;
