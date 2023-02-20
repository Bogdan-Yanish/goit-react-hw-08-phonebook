import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';

export const StyledUserMenu = styled(Box)`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const StyledUserName = styled(Typography)`
    font-size: 12px;
    color:white;
`;

export const LogoutBtn = styled(ExitToAppSharpIcon)`
    color:white;
`

