import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import { Row, Col } from 'react-bootstrap'
function Store() {
  return (
    <>
      <div>Store</div>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map(item => {
            return <Col key={item.id}><StoreItem {...item} /></Col>
        })}
      </Row>
    </>
  );
}

export default Store;
