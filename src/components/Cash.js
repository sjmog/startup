const Cash = () => {
  return (
    <div className="Cash">
      <div className="Cash__Row Cash__Total">
        <label className="h5">Total</label>
        <div className="Cash__Amount h2">$151,332</div>
      </div>
      <div className="Cash__Row">
        <label className="h5">Income</label>
        <div className="Cash__Amount h3">$0<span className="h5">per week</span></div>
      </div>
      <div className="Cash__Row">
        <label className="h5">Expenditure</label>
        <div className="Cash__Amount h3">$2,440<span className="h5">per week</span></div>
      </div>
    </div>
  )
}

export default Cash;