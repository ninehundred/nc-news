export const SortHeader = ({ topicQuery, setTopicQuery, headerList, filters }) => {

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTopicQuery(values => ({...values, [name]: value}))
  }
  
  return (
    <section className="articles_header">
      {
        filters.length !== 0 ? 
          <select name='topic'
                  id='topic'
                  className='topic_select_menu'
                  onChange={(event) => {handleChange(event)}}
                  value={topicQuery.topic}
                  style={{'margin-left': '20px'}}
                  >
          <option value="none" defaultValue hidden >sort by</option>
          {filters.map(filter => {
            return <option key={filter+'1'} value={filter}>{filter.replace(/_/g, ' ')}</option>
      })}
      </select> : <></>
      }

      <select name='sort_by'
              id='article_sort_menu'
              className='topic_select_menu'
              onChange={(event) => {handleChange(event)}}
              value={topicQuery.sort_by}
              >
        <option value="none" defaultValue hidden >sort by</option>
        {headerList.map(header => {
          return <option key={header+'1'} value={header}>{header.replace(/_/g, ' ')}</option>
        })}
      </select>

      <select name='order'
              id='order_by'
              className='topic_select_menu'
              onChange={(event) => {handleChange(event)}}
              value={topicQuery.order}
              >
        <option value="none" defaultValue hidden >order</option>
        <option key='asc1' value='asc'>ascending</option>
        <option key='desc1' value='desc'>descending</option>

      </select>
      
    </section>
  )
}