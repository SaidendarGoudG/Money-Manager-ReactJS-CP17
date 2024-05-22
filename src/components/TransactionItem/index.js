import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props

  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="history-list-container">
      <div className="history-list-item-container">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <div className="delete-container">
          <button
            className="delete-button"
            type="button"
            onClick={onDeleteTransaction}
            data-testid="delete"
          >
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="line" />
    </li>
  )
}

export default TransactionItem
