package com.testSqldb;

import com.dassault_systemes.platform.restServices.RestService;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
//import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

/**
 * Class PGReportGeneratorServices is used to invoke the web service methods
 * required for report generator widget
 * 
 * @since 2018x.5
 * @author
 *
 */
@Path("/services_emp")
public class sqlServices extends RestService {

	static final String TYPE_APPLICATION_FORMAT = "application/json";
	static final String EXCEPTION_MESSAGE = "Exception in OmeshDarshitServices";

	/**
	 * Method
	 * 
	 * @param request     : HttpServletRequest request param
	 * @param type        :
	 * @param name        :
	 * @param revision    :
	 * @param showAllCols :
	 * @return : Response of json object with object info
	 * @throws Exception
	 */
	@GET
	@Path("/getdata_emp")
	public Response getReportTemplateData(
			@javax.ws.rs.core.Context HttpServletRequest request,
			@QueryParam("type") String type, @QueryParam("name") String name,
			@QueryParam("revision") String revision,
			@QueryParam("showAllCols") String showAllCols,
			@QueryParam("templateId") String templateId) throws Exception {
		Response res = null;
		try {
			//boolean isSCMandatory = false;
			//matrix.db.Context context = getAuthenticatedContext(request,
				//	isSCMandatory);

			// ALL ENOVIA LOGIC GOES BELOW THIS LINE

			String strOutput = getDataFromDBTable();

			// ALL ENOVIA LOGIC ENDS
			

			res = Response.ok(strOutput).type(TYPE_APPLICATION_FORMAT).build();
		} catch (Exception e) {
			System.out.println(EXCEPTION_MESSAGE);
			e.printStackTrace();
			res = Response.status(Response.Status.BAD_REQUEST)
					.entity(e.getMessage()).build();
		}
		return res;
	}

	private String getDataFromDBTable() throws Exception {
		Class.forName("org.hsqldb.jdbc.JDBCDriver");
		StringBuilder strBuildOutput = new StringBuilder("[");
		String strOutput = null;
		try (Connection conHsqlDb = DriverManager.getConnection(
				"jdbc:hsqldb:hsql://localhost/training", "SA", "");
				Statement sqlStatement = conHsqlDb.createStatement();) {
			if (conHsqlDb != null) {
				ResultSet resultPerson = sqlStatement
						.executeQuery("select * from EMPLOYEES");

				while (resultPerson.next()) {
					String strEmpID = resultPerson.getString("EMPID");
					String strUserName = resultPerson.getString("USERNAME");
					String strFirstName = resultPerson.getString("FIRSTNAME");
					String strLastName = resultPerson.getString("LASTNAME");
					String strAge = resultPerson.getString("AGE");
					String strGender = resultPerson.getString("GENDER");

					strBuildOutput.append("{").append("\"EMPID\":\"")
							.append(strEmpID).append("\",")
							.append("\"USERNAME\":\"").append(strUserName)
							.append("\",").append("\"FIRSTNAME\":\"")
							.append(strFirstName).append("\",")
							.append("\"LASTNAME\":\"").append(strLastName)
							.append("\",").append("\"AGE\":\"").append(strAge)
							.append("\",").append("\"GENDER\":\"")
							.append(strGender).append("\"").append("},");
//					

//					System.out.println("Employee Id = " + strEmpID);
//					System.out.println("User Name = " + strUserName);
//					System.out.println("First Name = " + strFirstName);
//					System.out.println("Last Name = " + strLastName);
//					System.out.println("Age = " + strAge);
//					System.out.println("Gender = " + strGender);

				}
				strOutput = strBuildOutput.substring(0,
						strBuildOutput.lastIndexOf(","));
				
				strOutput += "]";
			}

		} catch (Exception ex) {
			System.out.println("Some Esception");
			throw ex;
		}

		System.out.println("OUTPUT = " + strOutput);
		return strOutput;

	}
}