import { useStore, useStoreAction } from '../data/Store'

const Cash = () => {
  const cash = useStore('cash')
  const getIncome = useStoreAction('getIncome')
  const getExpenditure = useStoreAction('getExpenditure')

  const currency = (number) => new Intl.NumberFormat('en-US').format(number)

  return (
    <div className="Cash">
      <div className="Cash__Row Cash__Total">
        <label className="h5">Total</label>
        <div className="Cash__Amount h2">${ currency(cash) }</div>
      </div>
      <div className="Cash__Row">
        <label className="h5">Income</label>
        <div className="Cash__Amount h3">${ currency(getIncome()) }<span className="h5">per week</span></div>
      </div>
      <div className="Cash__Row">
        <label className="h5">Expenditure</label>
        <div className="Cash__Amount h3">${ currency(getExpenditure()) }<span className="h5">per week</span></div>
      </div>
    </div>
  )
}

export default Cash;