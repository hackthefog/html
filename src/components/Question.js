import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin: 0.5rem 0;
`

export default ({question, answer, ...props}) => (
	<Wrapper>
		<p>
			{question}
		</p>
		<br></br>
		<p>
			{answer}
		</p>
	</Wrapper>
)