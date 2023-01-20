import java.util.Map;

import org.apache.batik.dom.events.DOMMouseEvent;

import com.matrixone.apps.domain.DomainConstants;
import com.matrixone.apps.domain.DomainObject;


import matrix.db.Context;
import matrix.util.StringList;


public class testDemo_mxJPO{

private static final String StringList = null;
private static final matrix.db.Context Context = null;

public  int checkEffectiveModify(Context context, String[] args) throws Exception {
	
	int ReturnStatus = 0;
	String ObjectId = args[0];
	
		try
		{
				DomainObject doMobile = DomainObject.newInstance(context, ObjectId);				
				String ObjType = doMobile.getInfo(context, DomainConstants.SELECT_TYPE);
				String ObjState  = doMobile.getInfo(context, DomainConstants.SELECT_CURRENT);
				
				
					
				
				if(!ObjType.equalsIgnoreCase("abtios"))
				{
					if(ObjState.equals("release")) {
						ReturnStatus = 1;
						System.out.println("Object in release state");
					}
					
				}
				else
				{
					ReturnStatus = 1;
					System.out.println("object is abtios type Go Ahead!!!!!");	
					
				}
				
				System.out.println(ObjType);
				System.out.println(ObjState);
				//modDescription(context,new String[]{ObjectId});
							
		}
		catch (Exception err)
		{
			err.printStackTrace();
		}
		return ReturnStatus;
	}

public  void modDescription(Context context, String[] args) throws Exception {
	
	
	String ObjectId = args[0];
	String AttrName = args[1];
	String AttrValue = args[2];
	
	
		try
		{
				System.out.println(ObjectId);
				System.out.println(AttrName);
				System.out.println(AttrValue);
				
				StringList select = new StringList();
	            select.add("ATTRIBUTE NAME");

	            DomainObject doMobile = DomainObject.newInstance(Context, ObjectId);

	            Map<?, ?> infoMap = doMobile.getInfo(Context, select);

	            String AttrVal = (String) infoMap.get("ATTRIBUTE NAME");
	            
	            System.out.println(AttrVal);
				
			//	String str1= StringList getAttributeNames(Context , ObjectId);
				
			//	DomainObject doMobile = DomainObject.newInstance(context, ObjectId);
				
				String description = (AttrName +" has been modified and New Value "+ AttrValue);
				
				doMobile.setDescription(context , description);
				
				System.out.println("Updated Description : "+description);
				
								
				
							
							
		}
		catch (Exception err)
		{
			 err.printStackTrace();
		}
		
		
		
		
	}

}