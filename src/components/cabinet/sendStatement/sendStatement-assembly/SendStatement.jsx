import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import s from './SendStatement.module.css'
import SendStatementForm from '../sendStatement-form/SendStatementForm';
import ListDocs from '../list-docs/ListDocs';
import { Box, Tab, Tabs } from '@mui/material';

const SendStatement = () => {
  let sendStatement = useSelector(state => state.cabinet.sendStatement)
  let [mode, setMode] = useState('online')

  let handleChange = (e, newValue) => {
    setMode(newValue)
  }

  return (
    <div className={s.sendStatement}>
      <h2>{sendStatement.title}</h2>
      <div className={s.wrapper}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={mode}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="online" label="Онлайн" />
            <Tab value="offline" label="Офлайн" />
          </Tabs>
        </Box>

        <div className={s.content}>
          {mode === "online" ? (
            <SendStatementForm inputs={sendStatement.inputs} />
          ) : (
            <ListDocs listDocs={sendStatement.listDocs} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SendStatement