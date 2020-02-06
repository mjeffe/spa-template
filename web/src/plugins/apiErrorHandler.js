const HTTP_STATUS = {           // In Laravel terminology:
    UNAUTHORIZED: 401,          // unauthenticated - not logged in or invalid token
    FORBIDDEN: 403,             // unauthorized - permission denied
    UNPROCESSABLE_ENTITY: 422,  // posted data validation error
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
};

/*
 * DO NOT THROW ERRORS
 *
 * This "handles" api error responses. That is, it does something reasonable
 */
function showHttpError(error) {
    const httpStatus = error.response.status;

    switch (httpStatus) {
        case HTTP_STATUS.UNAUTHORIZED:
            // during app boostrapping, the App object may not yet be defined.
            // So here we assume the init process will handle this stuff.
            if (window.App) {
                window.App.$store.dispatch('auth/invalidateAuthorization');
                // catch the router replace error and do nothing, because we may already be on the login page
                window.App.$router.replace({ name: 'login' }).catch(err => {}); /* eslint handle-callback-err: 0 */
            }

            showError({
                title: 'Unauthorized',
                text: error.response.data.message || 'Your session may have expired',
            });
            break;

        case HTTP_STATUS.UNPROCESSABLE_ENTITY:
            showError({
                title: error.response.data.message,
                text: formatUnprocessableEntityMessage(error.response.data.errors)
            });
            break;

        case HTTP_STATUS.INTERNAL_SERVER_ERROR:
            showError({
                title: 'Server error',
                text: 'Something bad happened on the server. You should report this if it happens again',
            });
            break;

        case HTTP_STATUS.SERVICE_UNAVAILABLE:
            showError({
                title: 'Server unavailable',
                text: 'It appears the server does not want to be bothered',
            });
            break;

        default:
            showError({
                title: 'Unknown error',
                text: 'An unknown error has occured',
            });
            break;
    }
}

function formatUnprocessableEntityMessage(errors) {
    let msg = '<ul>';
    for (const field in errors) {
        msg += `<li>${errors[field]}</li>`;
    }
    msg += '</ul>';

    return msg;
}

// NOTE: this is a rare exception - we shouldn't be calling display stuff from the data layer
export function showError(error) {
    if (window.App) {
        window.App.$notify({
            type: 'error',
            group: 'error',
            ...error,
        });
    } else {
        console.log('window.App not available, logging to console:');
        console.log(error);
    }
}

// Handle errors gracefully
export function handleError(error) {
    if (error.response) {
        showHttpError(error);
        return error;
    } else if (error.request) {
        showError({
            title: 'No response from server',
            text: 'Unable to connect to server or no response',
            error: error,
        });
        return error;
    } else {
        // something happened in setting up the request that triggered an error
        showError({
            title: 'Request failure',
            text: `Unable to make the http request via axios: ${error.message}`,
            error: error,
        });
        return error;
    }
}

// export default { showError, handleError };

