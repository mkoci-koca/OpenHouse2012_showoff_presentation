<!SLIDE title-slide>
# CloudForms QA 2012 #

## Martin Koci ##
## Senior QA Engineer, Red Hat ##
## 4.4.2012 ##

<!SLIDE bullets incremental>
# Content #

* What is cloud computing
* What are solutions
* What can be the problem here
* What is the solution
* The Implementation using CloudForms
  * Application Engine and QA
  * Cloud Engine and QA
  * System Engine and QA
  * Other QA teams - Matahari, DeltaCloud
* Conclusion
* Questions 

<!SLIDE bullets incremental transition=fade>
# What is cloud computing #

![clouds](../Cloud_computing.png)

* Term w/ many definitions
* Expansion on the concept of the grid, virtualization
* IaaS, PaaS, SaaS

<!SLIDE bullets incremental>
# What are solutions #

* Public Clouds
  * Resources are made available to the general public by a service provider
* Private Clouds
  * Infrastructure operated solely for a single organization
* Some examples
  - EC2
  - VMWare vSphere
  - RHEV
  - CondorCloud

<!SLIDE incremental>
# What can be the problem here #

![lost user](../lost_homer.png)

* Too many different APIs and tools/interfaces
* Proprietary / Vendor Lockin

!SLIDE bullets incremental
# What is the solution #

* <b>AEOLUS!</b>
  * <b>www.aeolusproject.org</b>
  * www.deltacloud.org
  <center>
  ![whehee](../whehee.png)
  </center>
<!SLIDE bullets incremental>
# The implementation using CloudForms #

* Describe Cloud Operations and Resources at a high level
* Using Application Egine
  * Oz
  * Image Factory
  * Image Warehouse
* Using Cloud Engine
  * Conductor
  * Aeolus Configure
  * Audrey
* Using System Engine
  * Katello

!SLIDE
# Application Engine QA #
 * See the command line mock example

!SLIDE
# Cloud Engine QA #
 * See the Aeolus example

!SLIDE incremental
# System Engine QA #
 * Systems management software
 * Control of your SW and systems through the web interface
   <br/><br/>
   <center>
   ![Katello architecture](../arch-diagram.png)
   </center>

!SLIDE incremental
# Matahari, DeltaCloud QA #
 * Matahari - deprecated 
 * http://deltacloud.apache.org
   * API that abstract diff between clouds
   * RESTful API

!SLIDE
# Conclusion #

I'd be happy if you remmeber/note at least these:

* links
  * www.aeolusproject.org
  * www.deltacloud.org
  * www.katello.org
* mailing-lists
  * aeolus-devel@lists.fedorahoststed.org
  * iwhd-devel@lists.fedorahosted.org
  * katello@lists.fedorahosted.org

!SLIDE
# Questions #
<br/><br/>
<center> ? </center>
<br/><br/>
\</presentation\>

