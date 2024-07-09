import { Metadata } from "next";

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Producto ${params.productId}`
    }
}

export default function PoductDetail(
    { params }: Props) {
    return <h1>Producto {params.productId}</h1>
}