package com.updateWeb;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
//import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

@Path("/services")
public class updateSev1 {
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
			@QueryParam("EMPID") String EMPID) throws Exception {
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
		try (Connection conHsqlDb = DriverManager.getConnection(
				"jdbc:hsqldb:hsql://localhost/training", "SA", "");
				Statement sqlStatement = conHsqlDb.createStatement();) {
			
			Connection con=DriverManager.getConnection("jdbc:hsqldb:hsql://localhost/training", "SA", "");
			
			String a= EMPID;
			
			  //integrity constraint violation: NOT NULL check constraint; SYS_CT_10091 table: EMPLOYEES column: EMPID
			PreparedStatement stmt=con.prepareStatement("delete from employees where EMPID=?"); 
			
			//stmt.setInt(1,101);//1 specifies the first parameter in the query  
			stmt.setString(1,a);  
			stmt.executeUpdate();   

		} catch (Exception ex) {
			System.out.println("delete print 2 in catch");
			System.out.println("Some Esception");
			ex.printStackTrace();
			throw ex;
		}
		return "";

	}


	private String getDataFromDBTable(String EMPID,String USERNAME,String FIRSTNAME,String LASTNAME,String AGE,String GENDER) throws Exception {
		Class.forName("org.hsqldb.jdbc.JDBCDriver");
		
		
		try (Connection conHsqlDb = DriverManager.getConnection(
				"jdbc:hsqldb:hsql://localhost/training", "SA", "");
				Statement sqlStatement = conHsqlDb.createStatement();) { 
					String a=EMPID;
					String b=USERNAME;
					String c=FIRSTNAME;
					String d=LASTNAME;
					String e=AGE;
					String f=GENDER;
//					PreparedStatement stmt = conHsqlDb.prepareStatement("select * from EMPLOYEES where EMPID=?");
//					stmt.setString(1,a);		
//					ResultSet resultPerson=stmt.executeQuery();
//						
			  //integrity constraint violation: NOT NULL check constraint; SYS_CT_10091 table: EMPLOYEES column: EMPID
			PreparedStatement stmt1=conHsqlDb.prepareStatement("update EMPLOYEES set USERNAME=?, FIRSTNAME=?, LASTNAME=?, AGE=?, GENDER=? where EMPID=?"); 
			
			//stmt.setInt(1,101);//1 specifies the first parameter in the query  
			stmt1.setString(1,b);  
			stmt1.setString(2,c);    
			stmt1.setString(3,d);  
			stmt1.setString(4,e);  
			stmt1.setString(5,f);  
			stmt1.setString(6,a);
			stmt1.executeUpdate();
//				
			  
		
			//System.out.println(i+" records inserted");  

		} catch (Exception ex){
			System.out.println("Some Esception");
			ex.printStackTrace();
			throw ex;
		}

		//System.out.println("OUTPUT = " + strOutput);
		return "";

	}

}
