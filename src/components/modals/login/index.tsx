import React from 'react'

import styles from './ModalRoot.module.sass'

import { useSelector, useDispatch} from 'react-redux'
import { Portal } from 'components/Portal' 
import { RootState } from 'redux/store'
import { Auth } from './Auth'
import { setIsVisible } from 'redux/modals/slice'
import { EnterCode } from './EnterCode'
import { Partners } from './Partners'
import { Registation } from './Registration'
import { WithCode } from './WithCode'


export const ModalRoot = () => {
  const modalEnabled = useSelector((state: RootState) => state.modals.isVisible)
  const currentModel = useSelector((state: RootState) => state.modals.currentModal)
  const overlayRef = React.useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()

  const renderModal = (modal?: string) => {
    switch(modal) {
      case "Auth": 
        return <Auth onClose={() => dispatch(setIsVisible(false))}/>
      case "EnterCode":
        return <EnterCode onClose={() => dispatch(setIsVisible(false))}/>
      case "Partners":
        return <Partners onClose={() => dispatch(setIsVisible(false))}/>
      case "Registration":
        return <Registation onClose={() => dispatch(setIsVisible(false))}/>
      case "WithCode":
        return <WithCode onClose={() => dispatch(setIsVisible(false))}/>
      }
  }

  return (
    <>    
    {modalEnabled && 
    <Portal>
    <div className={styles.overlay} ref={overlayRef}>
      <div className={styles.window}>
        {renderModal(currentModel)}
      </div>
    </div>
    </Portal>
    }
    </>
  )
}
