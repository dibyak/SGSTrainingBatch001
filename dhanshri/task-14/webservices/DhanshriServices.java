package com.dhanshri.dhanshri.webservices;

import com.dassault_systemes.platform.restServices.RestService;



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;

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
@Path("/dservices")
public class DhanshriServices extends RestService {

	static final String TYPE_APPLICATION_FORMAT = "application/json";
	static final String EXCEPTION_MESSAGE = "Exception in DhanshriServices";

	/**
	 * Method
	 * 
	 * @param request     : HttpServletRequest request param
	 * @param type        :
	 * @param name        :
	 * @param revision    :
	 * @param showAllCols :
	 * @return : Response of Json object with object info
	 * @throws Exception
	 */
	@GET
	@Path("/dgetdata")
	public Response getReportTemplateData(
			@javax.ws.rs.core.Context HttpServletRequest request,
			@QueryParam("type") String type, @QueryParam("name") String name,
			@QueryParam("revision") String revision,
			@QueryParam("showAllCols") String showAllCols,
			@QueryParam("templateId") String templateId) throws Exception {
		Response res = null;
		try {
			boolean isSCMandatory = false;
			matrix.db.Context context = getAuthenticatedContext(request,
					isSCMandatory);

			// ALL ENOVIA LOGIC GOES BELOW THIS LINE

			String strOutput1 = getDataFromDBTable();
//String strOutput= "hello";
			// ALL ENOVIA LOGIC ENDS

			res = Response.ok(strOutput1).type(TYPE_APPLICATION_FORMAT).build();
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
		String strOutput1 = null;
		
		try (
				Connection conHsqlDb = DriverManager.getConnection(
						"jdbc:hsqldb:hsql://localhost/training", "SA", "");
				Statement sqlStatement = conHsqlDb.createStatement();)
		{
			
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

				}
				strOutput1 = strBuildOutput.substring(0,
						strBuildOutput.lastIndexOf(","));
				
				strOutput1 += "]";
			
		}
		} catch (Exception ex) {
			System.out.println("Some Exception");
			throw ex;
		}
		
		System.out.println("OUTPUT = " + strOutput1);
		return strOutput1;

	}
	
	
	
	@GET
	@Path("/dpostdata")
	public Response getReportTemplateData1(
			@javax.ws.rs.core.Context HttpServletRequest request,
			@QueryParam("EMPID") String empid,
			@QueryParam("USERNAME") String username,
			@QueryParam("FIRSTNAME") String fname,
			@QueryParam("LASTNAME") String lname,
			@QueryParam("AGE") String age,
			@QueryParam("GENDER") String gender) throws Exception {
		Response res = null;
		try {
			boolean isSCMandatory = false;
			matrix.db.Context context = getAuthenticatedContext(request,
					isSCMandatory);

			// ALL ENOVIA LOGIC GOES BELOW THIS LINE

			
			String strOutput = getDataFromDBTable1(empid,username,fname,lname,age,gender);

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

	public String getDataFromDBTable1(String EMPID,String USERNAME,String FIRSTNAME,String LASTNAME,String AGE,String GENDER) throws Exception {
		Class.forName("org.hsqldb.jdbc.JDBCDriver");
	
		String strOutput = null;
		try (Connection con = DriverManager.getConnection(
				"jdbc:hsqldb:hsql://localhost/training", "SA", "");)
			 {
			  
			PreparedStatement stmt=con.prepareStatement("insert into EMPLOYEES values(?,?,?,?,?,?)");
			  
			stmt.setString(1,EMPID);  
			stmt.setString(2,USERNAME);  
			stmt.setString(3,FIRSTNAME);  
			stmt.setString(4,LASTNAME);  
			stmt.setString(5,AGE);  
			stmt.setString(6,GENDER);  
			
			int i=stmt.executeUpdate();  
			System.out.println(i+" records inserted");  

		} catch (Exception ex) {
			System.out.println("Some Exception");
			throw ex;
		}
		return strOutput;
	}
		
		@GET
		@Path("/updatedata")
		public Response getReportTemplateData2(
				@javax.ws.rs.core.Context HttpServletRequest request,
				@QueryParam("EMPID") String empid,
				@QueryParam("USERNAME") String username,
				@QueryParam("FIRSTNAME") String fname,
				@QueryParam("LASTNAME") String lname,
				@QueryParam("AGE") String age,
				@QueryParam("GENDER") String gender) throws Exception {
			Response res = null;
			try {
				boolean isSCMandatory = false;
				matrix.db.Context context = getAuthenticatedContext(request,
						isSCMandatory);

				// ALL ENOVIA LOGIC GOES BELOW THIS LINE

				
				String strOutput2 = getDataFromDBTable2(empid, username, fname, lname, age, gender);

				// ALL ENOVIA LOGIC ENDS
				

				res = Response.ok(strOutput2).type(TYPE_APPLICATION_FORMAT).build();
			} catch (Exception e) {
				System.out.println(EXCEPTION_MESSAGE);
				e.printStackTrace();
				res = Response.status(Response.Status.BAD_REQUEST)
						.entity(e.getMessage()).build();
			}
			return res;
		}

		public String getDataFromDBTable2(String EMPID,String USERNAME,String FIRSTNAME,String LASTNAME,String AGE,String GENDER) throws Exception {
			Class.forName("org.hsqldb.jdbc.JDBCDriver");
		
			String strOutput2 = null;
			try (Connection con = DriverManager.getConnection(
					"jdbc:hsqldb:hsql://localhost/training", "SA", "");)
				 {
				  
				PreparedStatement stmt=con.prepareStatement("update EMPLOYEES set USERNAME=?, FIRSTNAME=?,LASTNAME=?,AGE=?,GENDER=? where EMPID=?");
				  
				 
				stmt.setString(1,USERNAME);  
				stmt.setString(2,FIRSTNAME);  
				stmt.setString(3,LASTNAME);  
				stmt.setString(4,AGE);  
				stmt.setString(5,GENDER); 
				stmt.setString(6,EMPID); 
//				
				int i=stmt.executeUpdate();  
				System.out.println(i+" records updated");  

			} catch (Exception ex) {
				System.out.println("Some Exception");
				throw ex;
			}
			return strOutput2;
	}
		
		@GET
		@Path("/deletedata")
		public Response getReportTemplateData3(
				@javax.ws.rs.core.Context HttpServletRequest request,
				@QueryParam("EMPID") String empid) throws Exception {
			Response res = null;
			try {
				boolean isSCMandatory = false;
				matrix.db.Context context = getAuthenticatedContext(request,
						isSCMandatory);

				// ALL ENOVIA LOGIC GOES BELOW THIS LINE

				
				String strOutput3 = getDataFromDBTable2(empid);

				// ALL ENOVIA LOGIC ENDS
				

				res = Response.ok(strOutput3).type(TYPE_APPLICATION_FORMAT).build();
			} catch (Exception e) {
				System.out.println(EXCEPTION_MESSAGE);
				e.printStackTrace();
				res = Response.status(Response.Status.BAD_REQUEST)
						.entity(e.getMessage()).build();
			}
			return res;
		}
		private String getDataFromDBTable2(String EMPID) throws Exception {
			Class.forName("org.hsqldb.jdbc.JDBCDriver");
			try (Connection conHsqlDb = DriverManager.getConnection(
					"jdbc:hsqldb:hsql://localhost/training", "SA", "");
					Statement sqlStatement = conHsqlDb.createStatement();) {
				Connection con=DriverManager.getConnection("jdbc:hsqldb:hsql://localhost/training", "SA", "");
				
				String a = EMPID;
				PreparedStatement stmt=con.prepareStatement("delete from EMPLOYEES where EMPID=?"); 
				stmt.setString(1,a);  
				stmt.executeUpdate(); 
			
			} catch (Exception ex) {
				System.out.println("Some Exception");
				ex.printStackTrace();
				throw ex;
			}
			return EMPID;


		}

}