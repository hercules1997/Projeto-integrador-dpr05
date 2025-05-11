import {
  ProgressContainer,
  ProgressBarBackground,
  ProgressBarFill,
  ProgressText,
} from "./styledProcessBar";

export const ProgressBar = ({ etapa, totalEtapas }) => {
  const percentual = (etapa / totalEtapas) * 100;

  return (
    <ProgressContainer>
      <ProgressBarBackground>
        <ProgressBarFill width={percentual} />
      </ProgressBarBackground>
      <ProgressText>
        Etapa {etapa} de {totalEtapas}
      </ProgressText>
    </ProgressContainer>
  );
};
