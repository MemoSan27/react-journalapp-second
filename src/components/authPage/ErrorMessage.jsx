import { Alert, Grid } from "@mui/material";

export const ErrorMessage = ({ errorMessage }) => {
    return (
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid
                item
                xs={12}
                display={!!errorMessage ? '' : 'none'}
            >
                <Alert severity='error'>
                    {errorMessage}
                </Alert>
            </Grid>
        </Grid>
    )
}
