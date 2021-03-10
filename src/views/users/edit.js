module.exports = (obj) => {
  console.log('USER_OBJECT', obj);
  return `<html>
    <head>
      <title>View</title>
    </head>
    <body>
      <h1>Update Details</h1>
      <table>
        <tbody>
        <form action="http://localhost:8000/api/users/${obj.id}/updateForm" method="POST">
            <tr>
              <td>First Name</td>
              <td>
                <input
                  value="${obj.first_name}"
                  type="text"
                  name="first_name"
                  placeholder="First name"
                />
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <input
                  value="${obj.last_name}"
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input value="${obj.email_id}" type="text" name="email_id" placeholder="Email" />
              </td>
            </tr>

            <tr>
            <td>Phone</td>
            <td>
              <input value="${obj.phone}" type="text" name="phone" placeholder="Phone" />
            </td>
          </tr>
            <tr>
            <td>
              <input type="submit"/>
            </td>
          </tr>
          </form>
        </tbody>
      </table>
    </body>
  </html>`;
};
