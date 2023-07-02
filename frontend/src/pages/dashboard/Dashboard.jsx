
import { Container, Row, Col } from 'react-bootstrap';
import {PieChart, NavigationBar,BarChart } from '../components/index';


const Dashboard = () => {
  return (
    <div>
      <NavigationBar />
      
      <Container>
      {/* <ChatWidgetComponent /> */}
        <Row className="mt-4">
          <Col>
            <h1>Finance Tracker Dashboard</h1>
            <p>Here you can view and manage your financial data.</p>
          </Col>
        </Row>

        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "#0000001a",
              height: "25rem",
              borderRadius: "5rem",
              
            }}
          >
            <div style={{ width: "50%" }}>
              <BarChart />
            </div>
            <div style={{ width: "20%" }}>
              <PieChart />
            </div>
          </div>
        </Row>

        
      </Container>
    </div>
  );
};

export default Dashboard