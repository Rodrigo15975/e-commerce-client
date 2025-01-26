const PriceSummary = ({
  total,
  newTotalWithDiscount,
  applyDiscount,
}: {
  subtotal: number
  totalItems: number
  total: number
  newTotalWithDiscount: number
  applyDiscount: boolean
}) => (
  <>
    {applyDiscount && (
      <div className="flex text-xs justify-between">
        <span>Total Price without discount</span>
        <span className="line-through">${total.toFixed(2)}</span>
      </div>
    )}
    <div className="flex justify-between font-semibold">
      <span>Total Price</span>
      <span>${newTotalWithDiscount.toFixed(2)}</span>
    </div>
  </>
)

export default PriceSummary
