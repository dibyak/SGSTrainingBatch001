package com_abhay.abhay.webservices;

import com.dassault_systemes.platform.restServices.RestService;


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
@Path("/someservices")
public class AbhayServices extends RestService {
	
	static final String TYPE_APPLICATION_FORMAT  = "application/json";
	static final String EXCEPTION_MESSAGE  = "Exception in AbhayServices";
	
	/**
	 * Method 
	 * @param request : HttpServletRequest request param
	 * @param type : 
	 * @param name : 
	 * @param revision : 
	 * @param showAllCols :
	 * @return : Response of Json object with  object info
	 * @throws Exception
	 */
	@GET
	@Path("/getdata")
	public Response getReportTemplateData(@javax.ws.rs.core.Context HttpServletRequest request,
			@QueryParam("type") String type, 
			@QueryParam("name") String name,
			@QueryParam("revision") String revision,
			@QueryParam("showAllCols") String showAllCols,
			@QueryParam("templateId") String templateId)
			throws Exception {
		Response res = null;
		try {
			boolean isSCMandatory = false;
			matrix.db.Context context = getAuthenticatedContext(request, isSCMandatory);
			
			// ALL ENOVIA LOGIC GOES BELOW THIS LINE
			String strOutput = "Hello , This is My first Webservice"
					+ " "; // YOUR CODE WITH LOGIC
			String typeIs=" type : "+type;
			String nameIs=" name : "+name;
			String revisionIs=" revision : "+revision;	
			// ALL ENOVIA LOGIC ENDS
			
			res = Response.ok(strOutput + typeIs + nameIs + revisionIs ).type(TYPE_APPLICATION_FORMAT).build();
		} catch (Exception e) {
			System.out.println(EXCEPTION_MESSAGE);
			e.printStackTrace();
			res=Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
		}
		return res;
	}
}