import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import { MenuItemProps, Link, Arrow, OperationBadge, MenuItem } from '@redocly/developer-portal/ui';

/**
 * You can simply wrap or add css to the existing MenuItem element by importing it
 */

// import { MenuItem as OriginalMenuItem } from '@redocly/developer-portal/ui';

// export default function CustomMenuItem(props: MenuItemProps) {
//   return (
//     <div style={{ borderLeft: '2px solid red' }}>
//       <StyledMenuItem {...props} />
//     </div>
//   );
// }

// const StyledMenuItem = styled(OriginalMenuItem)`
//   color: #555;
// `;

/**
 * Custom sidebar MenuItem. The implementation below is almost identical to our default Footer.
 * The only difference is it adds a red border for active item.
 */
export default function CustomMenuItem(props: MenuItemProps) {
  const {
    item: { active, expanded, items, link, label, type, httpVerb, external, target, menuStyle, icon, sublabel },
    depth,
    isLast,
    isExpanded,
    isAlwaysExpanded,
    className,
  } = props;

  const theme = useTheme();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (props.item.active) {
      const node = ref.current;
      if (!node) {
        return;
      }

      const scrollHeight = document.body.scrollHeight;
      const totalHeight = window.scrollY + window.innerHeight;

      // at the bottom of the page
      if (totalHeight >= scrollHeight) {
        return;
      }

      node.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  });

  const hasChildren = items && items.length > 0;
  const arrowDirection = isExpanded ? 'down' : 'right';
  const isDrilldown = menuStyle === 'drilldown';
  const element =
    type === 'separator' ? (
      <Separator depth={depth} ref={ref} className={className}>
        {label}
      </Separator>
    ) : (
      <>
        <MenuItemTitle
          ref={ref}
          expanded={!!expanded && hasChildren}
          active={active}
          last={!!isLast}
          depth={depth}
          onClick={props.onClick}
          isAlwaysExpanded={!!isAlwaysExpanded}
          data-cy={`sidebar-item-${label}`}
          hasChildren={hasChildren}
          isDrilldown={isDrilldown}
          className={className}
        >
          {hasChildren && !isDrilldown && !isAlwaysExpanded && (
            <ArrowWrapper>
              <Arrow
                color={theme.sidebar.caretColor}
                direction={arrowDirection}
                width={`${theme.sidebar.caretSize}px`}
                height={`${theme.sidebar.caretSize}px`}
                data-cy="arrow"
              />
            </ArrowWrapper>
          )}
          {httpVerb && (
            <div>
              <OperationBadge type={httpVerb}>{httpVerb}</OperationBadge>
            </div>
          )}
          {isDrilldown ? (
            <DrilldownMenuItem icon={icon} label={label} sublabel={sublabel} />
          ) : (
            <MenuLabel>{label}</MenuLabel>
          )}
          {/* {external && (
            <div>
              <ExternalIcon />
            </div>
          )} */}
        </MenuItemTitle>
      </>
    );

  return link ? (
    <Link to={link} target={target || undefined} external={external || undefined}>
      {element}
    </Link>
  ) : (
    element
  );
}

export const MenuItemTitle = styled.div<{
  expanded: boolean;
  active: boolean;
  last: boolean;
  isAlwaysExpanded: boolean;
  hasChildren: boolean;
  isDrilldown: boolean;
  depth: number;
}>`
  border-left: ${({ active }) => (active ? '4px solid #DC1928' : '4px solid transparent')};

  position: relative;
  display: flex;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.sidebar.fontFamily};
  font-size: ${({ theme }) => theme.sidebar.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  color: ${props => (props.active ? props.theme.sidebar.activeTextColor : 'inherit')};
  background-color: ${props => (props.active ? props.theme.sidebar.activeBgColor : 'inherit')};

  cursor: ${({ isAlwaysExpanded }) => (isAlwaysExpanded ? 'default' : 'pointer')};

  margin-left: ${({ depth, theme }) =>
    `${theme.sidebar.spacing.offsetLeft + depth * theme.sidebar.spacing.offsetNesting}px`};

  padding-top: ${({ theme }) => theme.sidebar.spacing.paddingVertical}px;
  padding-right: ${({ theme }) => theme.sidebar.spacing.paddingHorizontal}px;
  padding-bottom: ${({ theme }) => theme.sidebar.spacing.paddingVertical}px;
  margin-bottom: 1px; // hardcoded for now

  padding-left: ${
    ({ theme, hasChildren, isAlwaysExpanded }) =>
      hasChildren && !isAlwaysExpanded
        ? theme.sidebar.spacing.paddingHorizontal
        : theme.sidebar.spacing.paddingHorizontal +
          theme.sidebar.caretSize +
          theme.sidebar.spacing.unit * 0.5 /* chevron margin-right = unit 0.5*/
  }px;

  transition: background-color 0.3s, color 0.3s;
  border-top-left-radius: ${({ theme }) => theme.sidebar.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.sidebar.borderRadius};

  word-break: break-word;

  :hover {
    color: ${({ isAlwaysExpanded, theme }) => (isAlwaysExpanded ? 'inherit' : theme.sidebar.activeTextColor)};
    background-color: ${({ isAlwaysExpanded, theme }) => (isAlwaysExpanded ? 'inherit' : theme.sidebar.activeBgColor)};
  }

  :empty {
    padding: 0;
  }

  ${({ isDrilldown, theme }) =>
    isDrilldown &&
    `
    padding-top: ${theme.sidebar.spacing.paddingVertical * 2}px;
    padding-bottom: ${theme.sidebar.spacing.paddingVertical * 2}px;
    padding-left: ${theme.sidebar.spacing.paddingHorizontal}px;
    &:hover {
      color: currentColor;
      background-color: ${theme.sidebar.backgroundColor};
    }
  `}
`;

export const Separator = styled.span<{ depth?: number }>`
  display: flex;
  justify-content: space-between;
  margin-left: ${({ theme, depth = 0 }) =>
    theme.sidebar.spacing.offsetLeft + depth * theme.sidebar.spacing.offsetNesting}px;
  padding: ${({ theme }) => theme.sidebar.spacing.paddingVertical}px
    ${({ theme }) => theme.sidebar.spacing.paddingHorizontal}px;

  padding-left: ${
    ({ theme }) =>
      theme.sidebar.spacing.paddingHorizontal + theme.sidebar.spacing.unit * 1.5 /* 1 chevron width + 0.5 margin-right*/
  }px;
  position: relative;
  cursor: default;
  font-family: ${({ theme }) => theme.sidebar.fontFamily};
  font-size: ${({ theme }) => theme.sidebar.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.sidebar.separatorLabelColor};

  &:empty {
    padding: 0.1em 0;
  }
`;

const MenuLabel = styled.span`
  width: 100%;
`;

const ArrowWrapper = styled.div`
  margin-right: 5px;
`;

const StyledDrilldownMenuItem = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.sidebar.textColor};
  font-size: ${({ theme }) => theme.sidebar.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

const DrilldownMenuIcon = styled.img`
  width: ${({ theme }) => theme.sidebar.spacing.unit * 4}px;
  height: ${({ theme }) => theme.sidebar.spacing.unit * 4}px;
  margin-right: ${({ theme }) => theme.sidebar.spacing.unit}px;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
`;

const DrilldownMenuSublabel = styled.span`
  display: block;
  margin-top: 2px;
  color: ${({ theme }) => theme.sidebar.textColorSecondary};
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;

// const StyledOperationBadge = styled(OperationBadge)`
//   flex-shrink: 0;
//   margin-top: 0;
// `;

function DrilldownMenuItem(props: { icon?: string | null; label?: string | null; sublabel?: string | null }) {
  const { icon, label, sublabel } = props;
  return (
    <StyledDrilldownMenuItem>
      {icon && <DrilldownMenuIcon src={icon} alt="" />}
      <span>
        {label}
        {sublabel && <DrilldownMenuSublabel>{sublabel}</DrilldownMenuSublabel>}
      </span>
    </StyledDrilldownMenuItem>
  );
}
