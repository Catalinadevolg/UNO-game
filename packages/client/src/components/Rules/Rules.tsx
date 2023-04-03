import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import useCarousel from 'utils/useCarousel';
import RulesInfo from './RulesInfo';
import { css } from 'styled-components';
import {
  StFlex,
  StCarousel,
  StCarouselBox,
  width100Percent,
} from 'styles/global';
import { cardsWithRules } from 'assets/data';

const TOTAL_SLIDES = 2;

const padding15AliginItemsCenter = css`
  padding: 15px;
  padding-bottom: 15px;
  align-items: center;
`;

const moreButtonStyle = css`
  ${padding15AliginItemsCenter}

  svg {
    margin-left: 15px;
  }
`;

const backButtonStyle = css`
  ${padding15AliginItemsCenter}

  svg {
    transform: rotate(180deg);
    margin-right: 15px;
  }
`;

const Rules = () => {
  const { ref, next, prev } = useCarousel(TOTAL_SLIDES);

  const iconMoreButton = {
    url: 'src/assets/icons/icons_sprite.svg#icon-arrow',
    width: 14,
    height: 23,
  };

  const iconBackButton = {
    ...iconMoreButton,
    isLeft: true,
  };

  return (
    <StCarousel width={636}>
      <StFlex ref={ref}>
        <StCarouselBox width={636} height={400}>
          <StFlex css={width100Percent} justifyContent="space-between">
            {cardsWithRules.map((card, id) => (
              <Card
                key={`card-${id}`}
                src={card.src}
                alt={card.alt}
                text={card.text}
              />
            ))}
          </StFlex>

          <Button
            onClick={next}
            svg={iconMoreButton}
            css={moreButtonStyle}
            text="Подробнее"
            disignType="alternate"
          />
        </StCarouselBox>

        <StCarouselBox width={636} height={400}>
          <RulesInfo />

          <Button
            onClick={prev}
            svg={iconBackButton}
            css={backButtonStyle}
            text="Назад"
            disignType="alternate"
          />
        </StCarouselBox>
      </StFlex>
    </StCarousel>
  );
};

export default Rules;
