import React, { Component } from 'react'
import ReactDOM from "react-dom";
import ReactPDF from 'react-pdf';

class MyPdfViewer extends React.Component {
    onDocumentLoad({ total }) {
        this.setState({ total });
    }



    render() {
        return (
            <div>
                <ReactPDF
                    file="CoffayResume.pdf"
                    pageIndex={2}
                    onDocumentLoad={this.onDocumentLoad}

                />

            </div>
        );
    }
}
export default MyPdfViewer
