import React, { Component } from 'react'
import ReactPDF from 'react-pdf';

class MyPdfViewer extends React.Component {
    onDocumentLoad({ total }) {
        this.setState({ total });
    }

    onPageLoad({ pageIndex, pageNumber }) {
        this.setState({ pageIndex, pageNumber });
    }

    render() {
        return (
            <div>
                <ReactPDF
                    file="../public/CoffayResume.pdf"
                    pageIndex={2}
                    onDocumentLoad={this.onDocumentLoad}
                    onPageLoad={this.onPageLoad}
                />
                <p>Page {this.state.pageNumber} of {this.state.total}</p>
            </div>
        );
    }
}
export default MyPdfViewer
