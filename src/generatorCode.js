import { API } from "aws-amplify";
import { listRequests } from "../graphql";

// Generate a unique invite code
function generateInviteCode() {
    const inviteCode = Math.random().toString(36).substring(2, 8);
    if (isUnique(inviteCode)) {
        return inviteCode;
    }
    return generateInviteCode();
}

// Get requests from graphql with a code filter
async function getRequests(inviteCode) {
    const requests = await API.graphql({
        query: listRequests,
        variables: {
            filter: {
                code: {
                    eq: inviteCode
                }
            }
        }
    });
    return requests;
}

// Check if invite code is unique
async function isUnique(inviteCode) {
    const requests = await getRequests(inviteCode);
    return requests.data.listRequests.items.length === 0;
}