import StepProgress from "./stepProgress.js";
import Step1 from "./step/step1";
// import Step2 from "./step/step2";
// import Step3 from "./step/step3";
import ProcessControl from "./progressControl.js";
const form = () => {
  return (
    <>
      <StepProgress />
      <Step1 />
      <ProcessControl />
    </>
  );
};

export default form;
