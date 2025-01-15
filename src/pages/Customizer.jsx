import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import state from '../store';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { useSnapshot } from 'valtio';
import CustomButton from '../components/CustomButton';
import { ColorPicker, Tab } from '../components';
import { EditorTabs } from '../config/constants';

const Customizer = () => {
  const snap = useSnapshot(state);
  const [activeEditorTab, setActiveEditorTab] = useState("");
 
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      
      default:
        return null;
    }
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
              {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation("up")}
          >
        
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer