import { RouterProvider, createHashRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/Default";
import { HomePage } from "./pages/Home";
import {InviteLinkReferral} from "./pages/InviteLinkReferral.tsx";
import {OpenMobileInviteLink} from "./pages/OpenMobileInviteLink.tsx";
import {Privacy} from "./pages/Privacy.tsx";
import {EmailVerify} from "./pages/EmailVerify.tsx";
import {ResetPassword} from "./pages/ResetPassword.tsx";




const router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true, // same path as parent: "/"
        element: <HomePage />,
      },
      {
        element: <InviteLinkReferral />,
        path: 'invite/:token',
      },
      {
        element: <OpenMobileInviteLink />,
        path: 'join/:token',
      },
      {
        element: <EmailVerify />,
        path: 'verify',
      },
      {
        element: <ResetPassword />,
        path: 'reset',
      },
      {
        element: <Privacy />,
        path: 'privacy',
      }
    ],
  },

]);

export function Router() {
  return <RouterProvider router={router} />;
}
