import type { NextPageContext } from "next"

interface ErrorProps {
  statusCode: number
  message: string
}

function Error({ statusCode, message }: ErrorProps) {
  return (
    <div className="error-page">
      {statusCode && <p className="status-code">{statusCode}</p>}
      {message && <p className="message">{message}</p>}
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  let statusCode
  let message
  if (res) {
    statusCode = res.statusCode
    message = res.statusMessage
  }
  if (err) {
    statusCode = err.statusCode
    message = err.message
  }

  return { statusCode, message }
}

export default Error
