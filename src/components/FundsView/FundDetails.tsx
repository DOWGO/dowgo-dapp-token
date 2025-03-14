import { Col, Row } from "antd";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

interface FundDetailsProps {
  openFundDetails: boolean;
}
export function FundDetails(props: FundDetailsProps) {
  const { openFundDetails } = props;

  const { state } = useContext(AppContext);
  const totalPortfolioAmount = state.stockPortfolio
    ? state.stockPortfolio.reduce((sum, currentStock) => {
        return sum + currentStock.price * currentStock.balance;
      }, 0)
    : 0;

  return (
    <div
      style={
        openFundDetails
          ? {
              marginTop: "16px",
              paddingTop: "16px",
              borderTop: "1px solid #303030",
            }
          : { display: "none" }
      }
    >
      <Row>
        <Col style={{ display: "flex", alignItems: "center" }} xs={{ span: 24}} md={{ span: 6}} sm={{ span: 6}} lg={{ span: 6}}>
          <div className="fund-name">Funds Portfolio</div>
        </Col>
        <Col xs={{ span: 24}} md={{ span: 18}} sm={{ span: 18}} lg={{ span: 18}}>
          <div className="fund-row-right">
            <div className="fund-button-container">
              <Link to="../invest/sell">
                <button className="fund-button">Sell</button>
              </Link>
              <Link to="../invest/buy">
                <button className="fund-button">Buy</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="fund-details-table-header">
      <Col xs={{ span: 13}} md={{ span: 9}} sm={{ span: 9}} lg={{ span: 9}}>
          Company name
        </Col>
        <Col xs={{ span: 6}} md={{ span: 5}} sm={{ span: 5}} lg={{ span: 5}} className="fund-acronym-title">
          Acronym
        </Col>
        <Col xs={{ span: 0}} md={{ span: 5}} sm={{ span: 5}} lg={{ span: 5}}>
          Industry
        </Col>
        <Col xs={{ span: 5}} md={{ span: 5}} sm={{ span: 5}} lg={{ span: 5}} className="fund-stock-amount-title">
          Amount Per Stock
        </Col>
        {/* <Col span={4}>Performance</Col> */}
      </Row>
      {state.stockPortfolio &&
        state.stockPortfolio.map((stock) => {
          const prct =
            (100 * stock.balance * stock.price) / totalPortfolioAmount;
          return (
            <Row
              className="fund-details-table-line"
              key={`fund-detail-${stock.ticker}`}
            >
              <Col 
                style={{ fontWeight: "600" }} 
                xs={{ span: 15}} 
                md={{ span: 9}} 
                sm={{ span: 9}} 
                lg={{ span: 9}}
              >
                {stock.stockName}
              </Col>
              <Col 
                xs={{ span: 6}} 
                md={{ span: 5}} 
                sm={{ span: 5}} 
                lg={{ span: 5}}
              >
                {stock.ticker}
              </Col>
              <Col 
                xs={{ span: 0}} 
                md={{ span: 5}} 
                sm={{ span: 5}} 
                lg={{ span: 5}}
              >
                {stock.sector}
              </Col>
              <Col 
                xs={{ span: 3}} 
                md={{ span: 5}} 
                sm={{ span: 5}} 
                lg={{ span: 5}}
              >
                {`${prct.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}%`}
              </Col>
              {/* <Col span={4}>{stock.ticker}</Col> */}
            </Row>
          );
        })}
    </div>
  );
}
