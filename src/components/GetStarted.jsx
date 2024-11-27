import { useState, useRef, useEffect } from 'react';
import {
    DeliveryOptions,
    GetStartedForm,
    PackageDescribe,
    RecipientForm,
    SenderForm,
} from '../pages';

const GetStarted = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [initialLoad, setInitialLoad] = useState(true);
    const [selectedTab, setSelectedTab] = useState('international');
    const [senderTab, setSenderTab] = useState('individual');
    const sectionRef = useRef(null); 

    useEffect(() => {
        if (!initialLoad && sectionRef.current) {
            const offset = -80; 
            const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [currentStep, initialLoad]);

    const handleNextStep = (tab, nextTab) => {
        setCurrentStep(currentStep + 1);
        setInitialLoad(false);
        setSelectedTab(tab);
        if (nextTab) {
            setSenderTab(nextTab); 
        }
    };

    const handlePreviousStep = (tab, prevTab) => {
        setCurrentStep(currentStep - 1);
        setInitialLoad(false);
        setSelectedTab(tab);
      
        if (prevTab) {
            setSenderTab(prevTab);
        }
    };

    return (
        <div ref={sectionRef} className='font-manrope'>
           {currentStep === 1 && <GetStartedForm onNext={handleNextStep} selectedTab={selectedTab} />}
           {currentStep === 2 && <PackageDescribe onPrev={handlePreviousStep} onNext={handleNextStep} selectedTab={selectedTab} />}
           {currentStep === 3 && <DeliveryOptions onNext={(tab) => handleNextStep(tab, 'individual')} onPrev={handlePreviousStep} selectedTab={selectedTab} />}
           {currentStep === 4 && <SenderForm onNext={() => handleNextStep(selectedTab, senderTab)} onPrev={handlePreviousStep} selectedTab={selectedTab} senderTab={senderTab} />}
           {currentStep === 5 && <RecipientForm onNext={handleNextStep} onPrev={(tab) => handlePreviousStep(tab, senderTab)} selectedTab={selectedTab} senderTab={senderTab} />} 
        </div>
    )
};

export default GetStarted;