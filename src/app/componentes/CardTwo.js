import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function App() {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Marca Vehiculo</p>
        <small className="text-default-500">Año 2025</small>
        <h4 className="font-bold text-large">Referencia Vehiculo</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://img.freepik.com/vector-gratis/coche-sedan-rojo-estilo-dibujos-animados-aislado-sobre-fondo-blanco_1308-64900.jpg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}