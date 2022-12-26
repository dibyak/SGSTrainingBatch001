package com.updateWeb;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

@Path("/services")
public class updateWebServices {
	static final String TYPE_APPLICATION_FORMAT = "application/json";
	static final String EXCEPTION_MESSAGE = "Exception in OmeshDarshitServices";
//	private static final String String = null;
//	private static final java.lang.String EMPID = null;
//	private static final java.lang.String USERNAME = null;
//	private static final java.lang.String FIRSTNAME = null;
//	private static final java.lang.String LASTNAME = null;
//	private static final java.lang.String AGE = null;
//	private static final java.lang.String GENDER = null;
//private int i;

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
	@Path("/updatedata")
	public Response getReportTemplateData1(
			@javax.ws.rs.core.Context HttpServletRequest request,
			@QueryParam("EMPID") String EMPID,
			@QueryParam("USERNAME") String USERNAME,
			@QueryParam("FIRSTNAME") String FIRSTNAME,
			@QueryParam("LASTNAME") String LASTNAME,
			@QueryParam("AGE") String AGE,
			@QueryParam("GENDER") String GENDER) throws Exception {
		Response res = null;
		try {
			//boolean isSCMandatory = false;
			//matrix.db.Context context = getAuthenticatedContext(request,
			//		isSCMandatory);

			// ALL ENOVIA LOGIC GOES BELOW THIS LINE

			
			String strOutput = getDataFromDBTable(EMPID,USERNAME,FIRSTNAME,LASTNAME,AGE,GENDER);

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
	@GET
	@Path("/deletedata")
	public Response getReportTemplateData_1(
			@javax.ws.rs.core.Context HttpServletRequest request,
			@QueryParam("EMPID") String EMPID,
			@QueryParam("USERNAME") String username,
			@QueryParam("FIRSTNAME") String fname,
			@QueryParam("LASTNAME") String lname,
			@QueryParam("AGE") String age,
			@QueryParam("GENDER") String GENDER) throws Exception {
		Response res = null;
		try {
			//boolean isSCMandatory = false;
			//matrix.db.Context context = getAuthenticatedContext(request,
			//		isSCMandatory);

			// ALL ENOVIA LOGIC GOES BELOW THIS LINE

			
			String strOutput = getDataFromDBTable_1(EMPID);

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
	
	private String getDataFromDBTable_1(String EMPID) throws Exception {
		Class.forName("org.hsqldb.jdbc.JDBCDriver");
		StringBuilder strBuildOutput = new StringBuilder("[");
		String strOutput = null;
		try (Connection conHsqlDb = DriverManager.getConnection(
				"jdbc:hsqldb:hsql://localhost/training", "SA", "");
				Statement sqlStatement = conHsqlDb.createStatement();) {
			Connection con=DriverManager.getConnection("jdbc:hsqldb:hsql://localhost/training", "SA", "");
			
			String a= EMPID;
			
			  //integrity constraint violation: NOT NULL check constraint; SYS_CT_10091 table: EMPLOYEES column: EMPID
			PreparedStatement stmt=con.prepareStatement("delete from employees where EMPID=?"); 
			
			//stmt.setInt(1,101);//1 specifies the first parameter in the query  
			stmt.setString(1,a);  
//			stmt.setString(2,b);  
//			stmt.setString(2,a);  
//			stmt.setString(4,d);  
//			stmt.setString(5,e);  
//			stmt.setString(6,f);  
			stmt.executeUpdate(); 
			
			strOutput = strBuildOutput.substring(0,
					strBuildOutput.lastIndexOf(","));
//				
			strOutput += "]";
			  
		
			//System.out.println(i+" records inserted");  

		} catch (Exception ex) {
			System.out.println("Some Esception");
			ex.printStackTrace();
			throw ex;
		}

		//System.out.println("OUTPUT = " + strOutput);
		return strOutput;

	}


	private String getDataFromDBTable(String EMPID,String USERNAME,String FIRSTNAME,String LASTNAME,String AGE,String GENDER) throws Exception {
		Class.forName("org.hsqldb.jdbc.JDBCDriver");
		StringBuilder strBuildOutput = new StringBuilder("[");
		String strOutput = null;
		try (Connection conHsqlDb = DriverManager.getConnection(
				"jdbc:hsqldb:hsql://localhost/training", "SA", "");
				Statement sqlStatement = conHsqlDb.createStatement();) {
			Connection con=DriverManager.getConnection("jdbc:hsqldb:hsql://localhost/training", "SA","");
			
			String a= EMPID;
			String b= USERNAME;
			String c= FIRSTNAME;
			String d= LASTNAME;
			String e= AGE;
			String f= GENDER;
			  //integrity constraint violation: NOT NULL check constraint; SYS_CT_10091 table: EMPLOYEES column: EMPID
			PreparedStatement stmt=con.prepareStatement("update EMPLOYEES set USERNAME=?, FIRSTNAME=?, LASTNAME=?, AGE=?, GENDER=?  where EMPID=?"); 
			
			//stmt.setInt(1,101);//1 specifies the first parameter in the query  
			stmt.setString(1,b);  
			stmt.setString(2,c);    
			stmt.setString(3,d);  
			stmt.setString(4,e);  
			stmt.setString(5,f);  
			stmt.setString(6,a);
			stmt.executeUpdate(); 
			
			strOutput = strBuildOutput.substring(0,
					strBuildOutput.lastIndexOf(","));
//				
			strOutput += "data Updated!";
			  
		
			//System.out.println(i+" records inserted");  

		} catch (Exception ex) {
			System.out.println("Some Esception");
			ex.printStackTrace();
			throw ex;
		}

		//System.out.println("OUTPUT = " + strOutput);
		return strOutput;

	}

}
