import * as React from 'react';
import slugify from 'slugify';

export function StepWrapper({ steps, stepIdx, children }) {
  const label = steps[stepIdx];
  const stepId = slugify(label).toLowerCase();
  return (
    <>
      <div className="interactive-block" id={`interactive-${stepId}`}>
        <div className="interactive-block-inner">
          <div className="breadcrumbs-wrap">
            <ul
              className="breadcrumb tutorial-step-crumbs"
              id={`bc-ul-${stepId}`}
              data-steplabel={label}
              data-stepid={stepId}
            >
              {steps.map((step, idx) => {
                const iterStepId = slugify(step).toLowerCase();
                let className = `breadcrumb-item bc-${iterStepId}`;
                if (idx > 0) className += ' disabled';
                if (iterStepId === stepId) className += ' current';
                return (
                  <li className={className} key={iterStepId}>
                    <a href={`#interactive-${iterStepId}`}>{step}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="interactive-block-ui">{children}</div>
        </div>
      </div>
    </>
  );
}
