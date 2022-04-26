export const ErrorMessage = ({error}) => {
  console.log('error inside error message component\n', error)
  // TODO - bring in message returned from response
  return <p className='error_message'>{error}</p>
}