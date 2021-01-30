import React from 'react'

type Props = {
  status: string
}

export const StatusViewer = (props: any) => {
  return <div>{props.status}</div>
}
