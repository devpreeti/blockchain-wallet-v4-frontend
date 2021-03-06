import styled from 'styled-components'

import { GreyCartridge } from 'components/Cartridge'
import { TableCell, Text } from 'blockchain-info-components'

import CoinDisplay from 'components/Display/CoinDisplay'
import FiatDisplay from 'components/Display/FiatDisplay'

export const AmountTableCell = styled(TableCell)`
  flex-direction: column;
  align-items: flex-end;
`

export const CoinAmountWrapper = styled(CoinDisplay)`
  justify-content: flex-end;
`

export const FiatAmountWrapper = styled(FiatDisplay)`
  justify-content: flex-end;
`

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  background-color: ${props => props.theme.orange000};
  border-radius: 32px;
`

export const PendingTag = styled(GreyCartridge)`
  font-size: 12px;
  margin-left: 8px;
`

export const Value = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  color: ${props => props.theme.grey600};
  line-height: 1.5;
  * {
    font-size: 14px !important;
    font-weight: 500 !important;
    color: ${props => props.theme.grey600} !important;
  }
`

export const InterestTableCell = styled(TableCell)`
  align-items: center;
  > ${Value} {
    margin-left: 20px;
  }
`

export const ViewTransaction = styled(Text)`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`
