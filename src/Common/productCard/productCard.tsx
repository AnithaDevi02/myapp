import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";

interface ProductCardTypes {
    productInfo: any;
    onClick: (data : any) => void;
}
function ProductCard(params: ProductCardTypes) {
  function buttonClick(data: any) {
    params.onClick(data);
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={params.productInfo.thumbnail} />
      <Card.Body>
        <Link className='"link-tag' to={`/product/${params.productInfo.id}`}></Link>
        <Card.Title>{params.productInfo.title}</Card.Title>
        <Card.Text>
          {params.productInfo.description}
</Card.Text>
        <Button onClick={() => buttonClick(params.productInfo)} className='button' variant="primary">Add to cart</Button>
         
      </Card.Body>
    </Card>
  );
}

export default ProductCard;