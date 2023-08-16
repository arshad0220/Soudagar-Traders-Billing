import React, { forwardRef } from 'react';
import { Card, ListGroup, Table } from 'react-bootstrap';
import Logo from '../public/logo.png';
import Seal from '../public/seal_sign.png';

const Print = forwardRef(({ invoiceData }, ref) => {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(invoiceData.items.length / itemsPerPage);

  return (
    <div ref={ref} style={{ fontFamily: 'Consolas', fontSize: 15 }}>
      <div style={{ textAlign: 'center', marginTop: 5, marginBottom: 5 }}>
        <img src={Logo} alt="Logo" style={{ width: 50, height: 50 }} />
      </div>
      {Array.from({ length: totalPages }, (_, pageIndex) => {
        const startIndex = pageIndex * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToDisplay = invoiceData.items.slice(startIndex, endIndex);

        return (
          <Card key={pageIndex}>
            <Card.Header>
              <h2>Soudagar Traders</h2>
              <p>Date: {invoiceData.date.toDateString()}</p>
              <p>Invoice Number: {invoiceData.invoiceNumber}</p>
              <p>Manager Name: {invoiceData.managerName}</p>
              <p>Customer Name: {invoiceData.customerName}</p>
            </Card.Header>
            <ListGroup>
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsToDisplay.map((item, index) => (
                    <tr key={index}>
                      <td>{item.item}</td>
                      <td>{item.itemDate.toDateString()}</td>
                      <td>{item.qty}</td>
                      <td>{item.price}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </ListGroup>
            <Card.Footer>
              <p>Page {pageIndex + 1} of {totalPages}</p>
              <p>Grand Total: {invoiceData.grandTotal}</p>
            </Card.Footer>
            {pageIndex === totalPages - 1 && (
              <div style={{ textAlign: 'center', marginTop: 5 }}>
                <img src={Seal} alt="Logo" style={{ width: 100, height: 100 }} />
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
});

export default Print;
