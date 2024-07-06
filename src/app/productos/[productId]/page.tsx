export default function PoductDetail(
    { params }: {
        params: {
            productId: string
        }
    }
) {
    return <h1>Producto {params.productId}</h1>
}